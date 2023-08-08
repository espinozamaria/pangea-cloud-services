import time
import socket
import json
from flask import Flask, jsonify, make_response, request

from pangea.config import PangeaConfig
from pangea.services import IpIntel
from pangea.services import Redact
import pangea.exceptions as pe
from settings import PANGEA_TOKEN, PANGEA_DOMAIN

# setup pangea services
config = PangeaConfig(domain=PANGEA_DOMAIN)
intel = IpIntel(PANGEA_TOKEN, config=config)
redact = Redact(PANGEA_TOKEN, config=config)

app = Flask(__name__)
app.config.from_pyfile('settings.py')

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/ip-address')
def get_ip_info():
    # get local ip address
    hostname = socket.gethostname()
    ip_address = socket.gethostbyname(hostname)
    # pass ip through pangea services
    try:
        response = intel.geolocate(
            ip=ip_address,
            provider="digitalelement",
        )
        return json.dumps(response.result, default=vars)
    except pe.PangeaAPIException as e:
        for err in e.errors:
            print(f"\t{err.detail} \n")
            return make_response(f"\t{err.detail} \n", 400)

@app.route('/redact', methods = ['POST'])
def redact_info():
    print('request', request.data)
    text = request.data
    try:
        redact_response = redact.redact(text=text)
        return json.dumps(redact_response.result, default=vars)
    except pe.PangeaAPIException as e:
        print(f"Embargo Request Error: {e.response.summary}")
        for err in e.errors:
            print(f"\t{err.detail} \n")
    # redact_response = redact.redact(text=text)
    # return json.dumps(response.result, default=vars)

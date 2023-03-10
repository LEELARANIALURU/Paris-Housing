from flask import Flask, request, jsonify
from flask_cors import CORS
import util

application = Flask(__name__)
CORS(application)

@application.route('/predict_home_price', methods=['GET', 'POST'])
def predict_home_price():
    area = int(request.form['area'])
    rooms = int(request.form['rooms'])
    yard = int(request.form['yard'])
    pool = int(request.form['pool'])
    floors = int(request.form['floors'])
    expensive = int(request.form['expensive'])
    prev_owners = int(request.form['prev_owners'])
    built = int(request.form['built'])
    newOrNot = int(request.form['newOrNot'])
    storm = int(request.form['storm'])
    basement = int(request.form['basement'])
    garage = int(request.form['garage'])
    storage = int(request.form['storage'])

    response = jsonify({
        'estPrice': util.get_estimated_price(area, rooms, yard, pool, floors, expensive, prev_owners, built, newOrNot, storm, basement, garage, storage)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    application.run()
from flask import Flask, request, jsonify
import util

app = Flask(__name__)

# @app.route('/get_location_names', methods=['GET'])
# def get_location_names():
#     response = jsonify({
#         'locations': util.get_location_names()
#     })
#     response.headers.add('Access-Control-Allow-Origin', '*')

#     return response

@app.route('/predict_home_price', methods=['GET', 'POST'])
def predict_home_price():
    sqft = float(request.form['area'])
    rooms = int(request.form['rooms'])
    yard = int(request.form['yard'])
    pool = int(request.form['pool'])
    floors = int(request.form['floors'])
    expensive = int(request.form['expensive'])
    prev_owners = int(request.form['prev_owners'])
    built = int(request.form['built'])
    new = int(request.form['new'])
    storm = int(request.form['storm'])
    basement = int(request.form['basement'])
    garage = int(request.form['garage'])
    storage = int(request.form['storage'])

    response = jsonify({
        'estimated_price': util.get_estimated_price(sqft, rooms, yard, pool, floors, expensive, prev_owners, built, newOrNot, storm, basement, garage, storage)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run()
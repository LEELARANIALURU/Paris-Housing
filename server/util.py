import pickle
import numpy as np

__model = None

def get_estimated_price(area, rooms, yard, pool, floors, expensive, prev_owners, built, newOrNot, storm, basement, garage, storage):

    x = np.zeros(13)
    x[0] = area
    x[1] = rooms
    x[2] = yard
    x[3] = pool
    x[4] = floors
    x[5] = expensive
    x[6] = prev_owners
    x[7] = built
    x[8] = newOrNot
    x[9] = storm
    x[10] = basement
    x[11] = garage
    x[12] = storage
    return round(__model.predict([x])[0],2)


def load_saved_artifacts():
    print("loading saved artifacts...start")

    global __model
    if __model is None:
        with open(r'C:\Users\HP\Documents\Projects\Paris Housing\model\londonHousing.pickle', 'rb') as f:
            f.seek(0)
            __model = pickle.load(f)
    print("loading saved artifacts...done")

if __name__ == '__main__':
    load_saved_artifacts()
    
    print(get_estimated_price(80771, 39, 1, 1, 98, 8, 6, 2015, 1, 0, 3653, 128, 1))
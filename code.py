import numpy as np
import pandas as pd

data = pd.DataFrame(pd.read_csv("ParisHousing.csv"))

y = data["price"]
x = data.drop(["price"], axis=1)

from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=1)

from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(x_train, y_train)

print(model.score(x_test, y_test))

print(model.predict([[80000, 3, 1, 1, 6, 22818, 5, 2, 2020, 0, 1, 2940, 4000, 130,1, 0]]))
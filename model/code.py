import pandas as pd

#loding the dataset
data = pd.DataFrame(pd.read_csv("ParisHousing.csv"))

#Correlation of variables
import matplotlib.pyplot as plt
import seaborn as sns
corr = data.corr()
features = corr.index
plt.figure(figsize=(20,30))
ax = sns.heatmap(data[features].corr(),annot=True,cmap='RdYlGn')
plt.show()

y = data["price"]

# Dropping the attributes which have least correlation with output
x = data.drop(["price", "cityCode", "hasGuestRoom", "attic"], axis=1)

# Splitting dataset
from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=2)

# instantiate and fit
from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(x_train, y_train)

# Prints 99.99995748190119
print(model.score(x_test, y_test)*100)

#save the model
import pickle
with open('londonHousing.pickle', 'wb') as f:
    pickle.dump(model, f)

# Save column names
import json
columns = {
    "data_columns": [col.lower() for col in x.columns]
}

with open('columns.json', 'w') as f:
    f.write(json.dumps(columns))
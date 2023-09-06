from flask import render_template
import connexion


app = connexion.App(__name__, specification_dir="./")
app.add_api("swagger.yml")


@app.route('/')
def home():
    return render_template('index.html')


# Turn off debug flag if doing production build
if __name__ == "__main__":
    app.run(host="localhost", port=1337, debug=True)

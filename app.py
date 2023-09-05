from flask import Flask, render_template


def create_app():
    return Flask(__name__)


app = create_app()


@app.route('/')
def index():
    return render_template('index.html')


app.run(host="localhost", port=1337)

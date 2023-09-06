from flask import abort


def generate_ticker_analysis(ticker_name):
    # TODO: placeholder
    if ticker_name == "TEST":
        return "TEST"
    else:
        abort(
            404, f"Ticker {ticker_name} not found"
        )

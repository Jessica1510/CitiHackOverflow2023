from app import create_app

app = create_app()


test_client = app.test_client()


def test_root(client) -> None:
    response = client.get("/")
    assert response.status_code == 200

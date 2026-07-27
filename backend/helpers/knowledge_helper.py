import json


def get_knowledge():
    with open("knowledge.json", "r", encoding="utf-8") as file:
        return json.load(file)
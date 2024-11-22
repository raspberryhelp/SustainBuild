from flask import Flask, request, jsonify

app = Flask(__name__)

# (Questions dictionary remains unchanged)

def evaluatewater(answers):
    score = 0
    if answers[0] < 10:
        score += 1
    if answers[1]:
        score += 1
    if answers[2]:
        score += 1
    if answers[3] > 400:
        score += 1
    if answers[4]:
        score += 1
    if answers[5] >= 15:
        score += 1
    if answers[6]:
        score += 1
    if answers[7] in ["Weekly", "Bi-weekly", "Monthly", "As needed"]:
        score += 1
    if answers[8] < 0.5:
        score += 1
    return score

def evaluateenergy(answers):
    score = 0
    if answers[0] < 30:
        score += 1
    if answers[1]:
        score += 1
    if answers[2] < 14:
        score += 1
    if answers[3]:
        score += 1
    if "Wind" in answers[4]:
        score += 1
    if "Solar" in answers[4]:
        score += 1
    if "Geothermal" in answers[4]:
        score += 1
    if answers[5] > 40:
        score += 1
    if answers[6] > 20:
        score += 1
    return score

def evaluatematerials(answers):
    score = 0
    if answers[0]:
        score += 1
    if answers[1] == "Never":
        score += 1
    if answers[3]:
        score += 1
    if answers[4]:
        score += 1
    if answers[5] > 25:
        score += 1
    if answers[6] > 90:
        score += 1
    return score

def evaluateindoor(answers):
    score = 0
    if answers[0] in ["1", "2"]:
        score += 1
    if answers[1]:
        score += 1
    if answers[2] != "Never":
        score += 1
    return score

@app.route('/submit', methods=["POST"])
def quiz():
    answers = request.json
    finalscore = 0
    waterscore, energyscore, matscore, indoorscore = 0, 0, 0, 0

    try:
        waterscore = evaluatewater(answers["Water Efficiency"])
        energyscore = evaluateenergy(answers["Energy and Atmosphere"])
        matscore = evaluatematerials(answers["Materials and Resources"])
        indoorscore = evaluateindoor(answers["Indoor Environmental Quality"])

        finalscore = waterscore + energyscore + matscore + indoorscore
        finalscore = (finalscore * 100) / 33  # Assuming 33 is the max score
    except KeyError as e:
        return jsonify({"error": f"Missing answers for category: {e}"}), 400

    return jsonify({
        "score": finalscore,
        "waterscore": waterscore,
        "energyscore": energyscore,
        "matscore": matscore,
        "indoorscore": indoorscore
    })

@app.route('/')
def hello_world():
    return 'Hello, World! I am here :)'




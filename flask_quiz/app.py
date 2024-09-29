from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Questions and answers
questions = [
    {
        'question': 'What is the capital of France?',
        'options': ['Paris', 'London', 'Berlin', 'Madrid'],
        'answer': 'Paris'
    },
    {
        'question': 'What is 2 + 2?',
        'options': ['3', '4', '5', '6'],
        'answer': '4'
    },
    {
        'question': 'Which planet is known as the Red Planet?',
        'options': ['Earth', 'Mars', 'Jupiter', 'Venus'],
        'answer': 'Mars'
    }
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/quiz', methods=['GET', 'POST'])
def quiz():
    if request.method == 'POST':
        user_answers = request.form.to_dict()
        score = 0
        for i, question in enumerate(questions):
            if question['answer'] == user_answers.get(f'question-{i}', ''):
                score += 1
        return redirect(url_for('result', score=score, total=len(questions)))

    return render_template('quiz.html', questions=questions)

@app.route('/result')
def result():
    score = request.args.get('score', 0, type=int)
    total = request.args.get('total', 1, type=int)
    return render_template('result.html', score=score, total=total)

if __name__ == '__main__':
    app.run(debug=True)

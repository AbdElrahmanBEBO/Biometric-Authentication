
from flask import Flask, jsonify, request
import face_rec 
app = Flask(__name__)
@app.route('/')
def index():
    return jsonify({'obito' : ['omda', 'emad']})


@app.route('/addimg', methods = ['POST'])
def addimg():
    imgs = request.json['imgs']
    faces = request.json["faces"]
    results = []
    for img in imgs:
        resFaces = face_rec.classify_face(img, faces)
        for res in resFaces:
            results.append(res)
    
    return jsonify({'resFaces' : results})

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# CORS is essential to allow your React frontend (usually port 5173 or 3000) 
# to communicate with this Flask backend (port 5000).
CORS(app)

# This is a mock database. In a real app, you would query MySQL or PostgreSQL.
users = [
    {"identifier": "admin@test.com", "password": "123", "role": "Admin"},
    {"identifier": "user@test.com", "password": "456", "role": "Customer"}
]

@app.route('/login', methods=['POST'])
def login():
    # Receive data from React
    data = request.json
    user_id = data.get('identifier')
    user_pass = data.get('password')
    user_role = data.get('role')

    # Logical check: Search for a matching user in our list
    is_valid = False
    for user in users:
        if (user['identifier'] == user_id and 
            user['password'] == user_pass and 
            user['role'] == user_role):
            is_valid = True
            break

    if is_valid:
        # Return True status to trigger frontend redirect
        return jsonify({
            "success": True,
            "message": "Login successful"
        }), 200
    else:
        # Return False status to trigger frontend refresh/error
        return jsonify({
            "success": False,
            "message": "Login failed: Invalid credentials or role"
        }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
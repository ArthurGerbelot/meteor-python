import json
import sys

response={'foo': 'script2'}

sys.stdout.write(json.JSONEncoder().encode(response))
sys.stdout.flush()
sys.exit(0)
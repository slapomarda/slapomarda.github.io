import urllib.request, urllib.parse, json, ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
url = "https://agendastudenti.unipd.it/grid_call.php"
params = [("form-type","corso"),("list","0"),("anno","2024"),("corso","IN0508"),("date","14-10-2024"),("all_events","0"),("anno2[]","999|3")]
req = urllib.request.Request(url, data=urllib.parse.urlencode(params).encode('ascii'))
res = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
data = json.loads(res)
print("first_day:", data.get("first_day"))
print("last_day:", data.get("last_day"))
print("num_celle:", len(data.get("celle", [])))

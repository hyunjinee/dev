from urllib2 import urlopen

f = urlopen('http://www.example.com')

print(f.read(500))
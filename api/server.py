import sys
import csv
import json
from http.server import HTTPServer, SimpleHTTPRequestHandler, test as test_orig
   
def leArquivo( arquivo ):
	with open( arquivo, newline='' ) as csvfile:
		listaProdutos = csv.reader( csvfile, delimiter=',' )
		novaLista=[]
		for row in listaProdutos:
			novaLista.append( row )

	return novaLista

def arquivoJSON( arquivo ):
	return json.dumps( leArquivo( arquivo ))
   
def test (*args):
   test_orig(*args, port=8000)

class CORSRequestHandler( SimpleHTTPRequestHandler ):
    def end_headers (self):
        self.send_header( 'Access-Control-Allow-Origin', '*' )
        self.send_header( 'Content-Type', 'application/json' )
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
	arq = open( 'index.html','w+' )
	arq.write( arquivoJSON( 'bancodedados.csv' ))
	arq.close()
	test( CORSRequestHandler, HTTPServer )
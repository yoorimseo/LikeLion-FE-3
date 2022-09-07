from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.parse as parser


class ServerHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('content-type', 'text/html')
        self.end_headers()

        f = open("index.html", 'r', encoding='UTF8')
        data = f.read()
        # print(data)
        f.close()
        self.wfile.write(data.encode())

    def do_POST(self):
        self.send_response(200)
        self.send_header('content-type', 'text/html')
        self.end_headers()
        print('post 요청이 들어왔습니다.')
        data = self.rfile.read(int(self.headers['Content-Length']))
        if data is not None:
            data_decode = dict(parser.parse_qs(data.decode()))
        if data_decode['id'] == ['hojun'] and data_decode['pw'] == ['1234']:
            f = open("success.html", 'r', encoding='UTF8')
            data = f.read()
            f.close()
            self.wfile.write(data.encode())
        else:
            f = open("index_fail.html", 'r', encoding='UTF8')
            data = f.read()
            f.close()
            self.wfile.write(data.encode())
        print(f'post params = {data_decode}')


PORT = 8080
server = HTTPServer(('', PORT), ServerHandler)
print(f'서버가 {PORT}로 서비스 되고 있습니다.')
server.serve_forever()
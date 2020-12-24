from werkzeug.wrappers import Request,Response

@Request.application
def application(request):
    result=['<title>DemoApplication</title>'] 
    result.append('''
                    <html>
                        <head>
                            <script type="text/javascript">
                                function addproduct()
                                {
                                    var add_product=document.getElementById("productId").value;
                                    var p_qty=document.getElementById("qty").value;
                                    var p_price=document.getElementById("price").value;
                                    document.getElementById('display').innerHTML = + add_product;
                                    document.getElementById('display1').innerHTML = + p_qty;
                                    document.getElementById('display2').innerHTML = + p_price;

                                }
                            </script>
                        </head>
                        <body>
                            <form action="" method="POST" align="center">
                                <h1>E-shop</h1>
                                <p>PRODUCT:<input  id="productId" type="text" name="product">
                                <p>QTY :<input  id="qty" type="number" name="qyt">
                                <p>PRICE:<input id="price" type="number" name="price">
                                  
                                <p><input type="button" id="addProduct" onclick="addproduct();" value="Add to Card">
                                <p>PRODUCT:<span id="display"></span>
                                <p>QTY:<span id="display1"></span>
                                <p>PRICE:<span id="display2"></span>
                            </form>
                        </body>
                    </html>
                        ''')
    return Response(''.join(result),mimetype='text/html')
if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost',4000,application)

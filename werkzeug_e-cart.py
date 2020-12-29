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
                                    document.getElementById('display1').innerHTML = add_product;
                                    document.getElementById('que1').innerHTML = + p_qty;
                                    document.getElementById('price1').innerHTML = + p_price;
                                    document.getElementById('total1').innerHTML = + p_qty*p_price;

                                }
                                function addproduct2()
                                {
                                    var add_product2=document.getElementById("productId2").value;
                                    var p_qty2=document.getElementById("qty2").value;
                                    var p_price2=document.getElementById("price_2").value;
                                    document.getElementById('display2').innerHTML =  add_product2;
                                    document.getElementById('que2').innerHTML = + p_qty2;
                                   document.getElementById('price2').innerHTML = + p_price2;
                                   document.getElementById('total2').innerHTML = + p_qty2*p_price2;

                                }


                                function addproduct3()
                                {
                                    var add_product3=document.getElementById("productId3").value;
                                    var p_qty3=document.getElementById("qty3").value;
                                    var p_price3=document.getElementById("price_3").value;
                                    document.getElementById('display3').innerHTML =  add_product3;
                                    document.getElementById('que3').innerHTML =  + p_qty3;
                                   document.getElementById('price3').innerHTML = + p_price3;
                                   document.getElementById('total3').innerHTML = + p_qty3*p_price3;

                                }
                            </script>
                        </head>
                        <body>
                            <form action="" method="POST" align="center">
                                <h1>E-shop</h1>
                                <p>shirt:<input  id="productId" type="text" name="product">
                                <p>QTY :<input  id="qty" type="number" name="qyt1">
                                <p>PRICE:<input id="price" type="number" name="price">
                                <p><input type="button" id="addProduct" onclick="addproduct();" value="Add to Card">

                                <p>trouset:<input  id="productId2" type="text" name="product2">
                                <p>QTY :<input  id="qty2" type="number" name="qyt">
                                <p>PRICE:<input id="price_2" type="number" name="price2">
                                <p><input type="button" id="addProduct2" onclick="addproduct2();" value="Add to Card">


                                <p>jaket:<input  id="productId3" type="text" name="product3">
                                <p>QTY :<input  id="qty3" type="number" name="qyt3">
                                <p>PRICE:<input id="price_3" type="number" name="price3">
                                <p><input type="button" id="addProduct3" onclick="addproduct3();" value="Add to Card">

                                
                                <p>shirt:<span id="display1"></span>
                                <p>QTY:<span id="que1"></span>
                                <p>PRICE:<span id="price1"></span>
                                <p>Total:<span id="total1"></span>

                                <p>trouser:<span id="display2"></span>
                                <p>QTY:<span id="que2"></span>
                                <p>PRICE:<span id="price2"></span>
                                <p>Total:<span id="total2"></span>

                                 <p>jaket:<span id="display3"></span>
                                <p>QTY:<span id="que3"></span>
                                <p>PRICE:<span id="price3"></span>
                                <p>Total:<span id="total3"></span>
                               
                            </form>
                        </body>
                    </html>
                        ''')
    return Response(''.join(result),mimetype='text/html')

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost',4000,application)

<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Date"%>
<%@page import="java.net.*"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-BR" ng-app="neweb">

    <head>
        <meta charset="utf-8">
        <title>GRUPO NEW.EB/</title>
        <link rel="shortcut icon" href="res/assets/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="author" content="\NEW.EB">
        <link rel="stylesheet" href="res/css/normalize.css">
        <link rel="stylesheet" href="res/css/base.css">
        <link rel="stylesheet" href="res/css/fixed-navigation-bar.css">
        <link rel="stylesheet" href="res/css/load-screen.css">
        <link rel="stylesheet" href="res/css/pace-dataurl.css">
        <link rel="stylesheet" href="res/css/jquery.mCustomScrollbar.css">
        <script src="/bower_components/PACE/pace.min.js"></script>
    </head>

    <body>

        <div id="loader-wrapper">
            <div id="loader">
                <div class="loader-section section-left"></div>
                <div class="loader-section section-right"></div>
            </div>
        </div>

        <h2 id=loading-text>Carregando</h2>

        <div class="rslides">
            <img src="res/assets/home/1.jpg" alt="">
            <img src="res/assets/home/2.jpg" alt="">
            <img src="res/assets/home/3.jpg" alt="">
            <img src="res/assets/home/4.jpg" alt="">
        </div>

        <div class="body">
            <div id="main-text">
		<p style="text-align: center"><%=InetAddress.getLocalHost()%></p>
		<p style="text-align: center">Session Id : <%=request.getSession().getId()%> <br/>
        Is it New Session : <%=request.getSession().isNew()%><br/>
        Session Creation Date : <%=new Date(request.getSession().getCreationTime())%><br/>
        Session Access Date : <%=new Date(request.getSession().getLastAccessedTime())%><br/><br/></p>
                <h1>Comprometimento com o que importa</h1>
                <h2>Com a NE<span class="change">W.</span>EB<span class="change">/</span> temos a melhor solução para o seu site.<br>Com agilidade e o suporte que você precisa.</h2>
            </div>
            <nav class="fixed-nav-bar">
                <div id="menu" class="menu">
                    <img src="res/assets/about/logo.png" />
                    <img class="play_slider" id="mid-arrow" style="display:none" src="res/assets/scrollDown.png" />
                    <ul>
                        <a id="btn-menu" class="show" href="#menu">MENU</a>
                        <ul class="menu-items">
                            <li><a class="pause_slider" id="sobre">SOBRE</a></li>
                            <li><a class="pause_slider" id="projetos">PROJETOS</a></li>
                            <li><a class="pause_slider" id="infra">INFRA-ESTRUTURA</a></li>
                            <li><a class="pause_slider" id="contato">CONTRATE-NOS</a></li>
                        </ul>
                    </ul>
                </div>
                
                <sobre></sobre>
                <projetos></projetos>
                <contato></contato>
                <infra></infra>
                <custom-footer></custom-footer> 
            </nav>
        </div>
        <script src="bower_components/angular/angular.js"></script>
        <script src="res/js/directives.js"></script>
        
        <script src="bower_components/jquery/dist/jquery.js"></script>
        <script src="bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js"></script>
        <script src="bower_components/velocity/velocity.min.js"></script>
        <script src="bower_components/ResponsiveSlides/responsiveslides.js"></script>
        <script src="res/js/control.js"></script>
    </body>

</html>

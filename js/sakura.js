 <% if (theme.sakura.enable) { %>
    <script type="text/javascript">
        //只在桌面版网页（首页）启用特效
        var windowWidth = $(window).width();
        if (window.location.href == 'https://ght5935.github.io/') {
            if (windowWidth > 768) { document.write('<script type="text/javascript" src="/js/sakura.js"><"/"script>') }
        }
    </script>
    <% } %>
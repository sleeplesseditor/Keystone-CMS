exports = module.exports = function (app) {
    // Set up the default app route to  http://localhost:3000/index.html
    app.get('/index.html', function (req, res) {
        function renderFullPage() {
            return `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Keystone With React And Redux</title>
                </head>
                <body>
                    <div class="react-container">
                    </div>
                    <script src="bundle.js"></script>
                </body>
            </html>
            `;
        }
        res.send(renderFullPage());
    });
};
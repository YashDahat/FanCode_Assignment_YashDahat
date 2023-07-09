const news = require('../controllers/news');

module.exports = function(app) {
    //Create a news
    app.route('/news/createNews').post(async (req, res, next) => {
        try{
            let params = req.query;
            return res.json(await news.setNews(params));
        }catch(e){
            return next(e);
        }
    });
    //fetch news by matchId
    app.route('/news/match').get(async (req, res, next) => {
        try{
            let params = req.query;
            return res.json(await news.getNewsByMatchId(params));
        }catch(e){
            return next(e);
        }
    });
    //fetch news by tourId
    app.route('/news/tour').get(async (req, res, next) => {
        try{
            let params = req.query;
            return res.json(await news.getNewsByTourId(params));
        }catch(e){
            return next(e);
        }
    });
    //fetch news by sportId
    app.route('/news/sport').get(async (req, res, next) => {
        try{
            let params = req.query;
            return res.json(await news.getNewBySportId(params));
        }catch(e){
            return next(e);
        }
    });
}

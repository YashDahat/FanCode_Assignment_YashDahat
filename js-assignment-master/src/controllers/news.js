const News = require('../models/news');

const setNews = async params => {
    const {matchId, newsDate, title, description} = params;
    if(!matchId || matchId<=0 || !title || !description){
        throw new Error('Required parameters are missing or have invalid value');
    }
    return await News.setNews(params);
}
const getNewsByMatchId = async params => {
    const {matchId} = params;
    if(!matchId || matchId <=0){
        throw new Error('Required parameters are missing or have invalid value');
    }
    return await News.getNewsByMatchId(params);
}

const getNewsByTourId = async params => {
    const {tourId} = params;
    if(!tourId || tourId <=0){
        throw new Error('Required parameters are missing or have invalid value');
    }
    return await News.getNewsByTourId(params);
}

const getNewBySportId = async params => {
    const {sportId} = params;
    if(!sportId || sportId <=0){
        throw new Error('Required parameters are missing or have invalid value');
    }
    return await News.getNewBySportId(params);
}

module.exports ={
    setNews: setNews,
    getNewsByMatchId:getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewBySportId: getNewBySportId
}
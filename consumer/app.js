/**
 * @author miken
 */
var logger = require('winston')
var YQL = require('yql');
var mysql = require('mysql');

logger.add(winston.transports.File, { filename: 'consumer.log', level:'info'});
logger.remove(winston.transports.Console);

logger.info('Starting yql query', function (err, level, msg) {
	
	new YQL.exec("select * from yahoo.finance.quotes where (symbol=@stock)", function(response) {

	if (response.error) {
		console.log("Error: " + response.error.description);
	} 
	else {
        var Symbol = response.query.results.quote.Symbol
	    Ask = response.query.results.quote.Ask
	    AskRealtime = response.query.results.quote.Askrealtime
	    Bid = response.query.results.quote.Bid
	    BidRealtime = response.query.results.quote.BidRealtime
	    AverageDailyVolume = response.query.results.quote.AverageDailyVolume
	    BookValue = response.query.results.quote.BookValue
	    ChangeRealtime = response.query.results.quote.ChangeRealtime
	    Change = response.query.results.quote.Change
	    TradeDate = response.query.results.quote.TradeDate
	    LastTradeDate = response.query.results.quote.LastTradeDate
	    LastTradePriceOnly = response.query.results.quote.LastTradePriceOnly
	    LastTradeRealtimeWithTime = response.query.results.quote.LastTradeRealtimeWithTime
	    LastTradeTime = response.query.results.quote.LastTradeTime
	    LastTradeWithTime = response.query.results.quote.LastTradeWithTime    
	    PercentChange = response.query.results.quote.PercentChange
	    Commission = response.query.results.quote.Commission
	    AfterHoursChangeRealtime = response.query.results.quote.AfterHoursChangeRealtime
	    DividendShare = response.query.results.quote.DividendShare
	    EarningsShare = response.query.results.quote.EarningsShare
	    ErrorIndicationreturnedforsymbolchangedinvalid = response.query.results.quote.ErrorIndicationreturnedforsymbolchangedinvalid
	    EPSEstimateCurrentYear = response.query.results.quote.EPSEstimateCurrentYear
	    EPSEstimateNextYear = response.query.results.quote.EPSEstimateNextYear
	    EPSEstimateNextQuarter = response.query.results.quote.EPSEstimateNextQuarter
	    DaysLow = response.query.results.quote.DaysLow
	    DaysHigh = response.query.results.quote.DaysHigh
	    YearLow = response.query.results.quote.YearLow
	    YearHigh = response.query.results.quote.YearHigh
	    HoldingsGainPercent = response.query.results.quote.HoldingsGainPercent
	    AnnualizedGain = response.query.results.quote.AnnualizedGain
	    HoldingsGain = response.query.results.quote.HoldingsGain
	    HoldingsGainPercentRealtime = response.query.results.quote.HoldingsGainPercentRealtime
	    HoldingsGainRealtime = response.query.results.quote.HoldingsGainRealtime
	    MoreInfo = response.query.results.quote.MoreInfo
	    OrderBookRealtime = response.query.results.quote.OrderBookRealtime
	    MarketCapitalization = response.query.results.quote.MarketCapitalization
	    MarketCapRealtime = response.query.results.quote.MarketCapRealtime
	    EBITDA = response.query.results.quote.EBITDA
	    ChangeFromYearLow = response.query.results.quote.ChangeFromYearLow
	    PercentChangeFromYearLow = response.query.results.quote.PercentChangeFromYearLow
	    ChangePercentRealtime = response.query.results.quote.ChangePercentRealtime
	    ChangeFromYearHigh = response.query.results.quote.ChangeFromYearHigh
	    PercebtChangeFromYearHigh = response.query.results.quote.PercebtChangeFromYearHigh
	    LastTradeWithTime = response.query.results.quote.LastTradeWithTime
	    LastTradePriceOnly = response.query.results.quote.LastTradePriceOnly
	    HighLimit = response.query.results.quote.HighLimit
	    LowLimit = response.query.results.quote.LowLimit
	    DaysRange = response.query.results.quote.DaysRange	    
	    DaysRangeRealtime = response.query.results.quote.DaysRangeRealtime
	    FiftydayMovingAverage = response.query.results.quote.FiftydayMovingAverage
	    TwoHundreddayMovingAverage = response.query.results.quote.TwoHundreddayMovingAverage
	    ChangeFromTwoHundreddayMovingAverage = response.query.results.quote.ChangeFromTwoHundreddayMovingAverage
	    PercentChangeFromTwoHundreddayMovingAverage = response.query.results.quote.PercentChangeFromTwoHundreddayMovingAverage
	    ChangeFromFiftydayMovingAverage = response.query.results.quote.ChangeFromFiftydayMovingAverage
	    PercentChangeFromFiftydayMovingAverage = response.query.results.quote.PercentChangeFromFiftydayMovingAverage
	    Name = response.query.results.quote.Name
	    Notes = response.query.results.quote.Notes
	    Open = response.query.results.quote.Open
	    PreviousClose = response.query.results.quote.PreviousClose
	    PricePaid = response.query.results.quote.PricePaid
	    ChangeinPercent = response.query.results.quote.ChangeinPercent
	    PriceSales = response.query.results.quote.PriceSales
	    PriceBook = response.query.results.quote.PriceBook
	    ExDividendDate = response.query.results.quote.ExDividendDate
	    PERatio = response.query.results.quote.PERatio
	    DividendPayDate = response.query.results.quote.DividendPayDate
	    PERatioRealtime = response.query.results.quote.PERatioRealtime
	    PEGRatio = response.query.results.quote.PEGRatio
	    PriceEPSEstimateCurrentYear = response.query.results.quote.PriceEPSEstimateCurrentYear
	    PriceEPSEstimateNextYear = response.query.results.quote.PriceEPSEstimateNextYear
	    SharesOwned = response.query.results.quote.SharesOwned
	    ShortRatio = response.query.results.quote.ShortRatio
	    TickerTrend = response.query.results.quote.TickerTrend
	    OneyrTargetPrice = response.query.results.quote.OneyrTargetPrice
	    Volume = response.query.results.quote.Volume
	    HoldingsValue = response.query.results.quote.HoldingsValue
	    HoldingsValueRealtime = response.query.results.quote.HoldingsValueRealtime
	    YearRange = response.query.results.quote.YearRange
	    DaysValueChange = response.query.results.quote.DaysValueChange
	    DaysValueChangeRealtime = response.query.results.quote.DaysValueChangeRealtime
	    StockExchange = response.query.results.quote.StockExchange
	    DividendYield = response.query.results.quote.DividendYield;
 
	logger.log(AverageDailyVolume,EarningsShare, ChangeRealtime);
	}
}, {"stock": 'DELL'});
	
	
});
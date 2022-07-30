// Behind the scenes of Events

// Browser ----- JS Engine + WebAPI
// js engine are different in every browser, crome has V8 engine, firefox has spidermonkey, but implementation are almost similar in every browser.

// so here when user write a event code, and many other code at that time js engine is parsing all code but he assign browser to keep an eye on event, as a js is a single threaded language, so js engine will take care of the other code and browser webapi's will take care on the events. whwnever the user perform event webapi's will inform js engine that user has performed event and he will pass the event callback function.

// there is event loop which is passing event 1 by 1 in a queue, one after other, and then execute.
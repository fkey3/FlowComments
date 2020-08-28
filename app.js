'use strict';
const Homey = require('homey');

//apps.developers.athom.com chapter Flows, "listening for events"
//Register run listeners for each flow card

//TRIGGGERCARDS

//CONDITIONCARDS
//V2 implementation
const ConditionComment = new Homey.FlowCardCondition('condition_Comment');
const ConditionFixThis = new Homey.FlowCardCondition('condition_FixThis');
//V3 implementation
// let ConditionComment = this.homey.flow.getconditioncard('condition_Comment');
// let ConditionFixThis = this.homey.flow.getconditioncard('condition_FixThis');

//ACTIONCARDS
const ActionComment = new Homey.FlowCardAction('action_Comment');
const ActionFixThis = new Homey.FlowCardAction('action_FixThis');
//V3 implementation
// let ActionComment = this.homey.flow.getActioncard('action_Comment');
// let ActionFixThis = this.homey.flow.getActioncard('action_FixThis');

//apps.developers.athom.com chapter App Development guidelines, "General"
// add the name of your app here. This class will should be the same name as used later in the "module.exports"
class FlowComments extends Homey.App {
	
	onInit() {
// https://apps.developer.athom.com/tutorial-Flow.html
// listening for events: In your app, you should register a run listener for each Flow card.
// https://apps.developer.athom.com/FlowCardCondition.html
// Register the new flowcard
		ConditionComment.register()
// define the runlistener
		ConditionComment.registerRunListener(async (args,state) =>
		{return true}) // The card created is not active. So no function is defined. It will always return "true"

// repeat for all other cards
		ConditionFixThis.register().registerRunListener(async (args,state) => {return true});
		ActionComment.register().registerRunListener(async (args,state) => {return true});
		ActionFixThis.register().registerRunListener(async (args,state) => {return true});

	}
	
}
// add the name of your app here, the name is the class name as defined earlier
module.exports = FlowComments;
'use strict';
const Homey = require('homey');

//apps.developers.athom.com chapter Flows, "listening for events"
//Register run listeners for each flow card

//TRIGGGERCARDS

//CONDITIONCARDS
//V2 implementation
// const ConditionComment = new Homey.FlowCardCondition('condition_Comment');
// const ConditionFixThis = new Homey.FlowCardCondition('condition_FixThis');
//V3 implementation
// let ConditionComment = this.homey.flow.getconditioncard('condition_Comment');
// let ConditionFixThis = this.homey.flow.getconditioncard('condition_FixThis');

//ACTIONCARDS
// const ActionComment = new Homey.FlowCardAction('action_Comment');
// const ActionFixThis = new Homey.FlowCardAction('action_FixThis');
//V3 implementation
// let ActionComment = this.homey.flow.getActioncard('action_Comment');
// let ActionFixThis = this.homey.flow.getActioncard('action_FixThis');

//apps.developers.athom.com chapter App Development guidelines, "General"
// add the name of your app here. This class will should be the same name as used later in the "module.exports"
class FlowComments extends Homey.App {
	
	onInit() {
		this.log(`${Homey.manifest.id} ${Homey.manifest.version} initialising --------------`)
		// flow conditions
		// moved declarations into onInit()
		// Changed capatilization on getconditioncard
		const ConditionComment = this.homey.flow.getConditionCard('condition_Comment');
		const ConditionFixThis = this.homey.flow.getConditionCard('condition_FixThis');

		// flow actions
		const ActionComment = this.homey.flow.getActionCard('action_Comment');
		const ActionFixThis = this.homey.flow.getActionCard('action_FixThis');

		// The card created is not active. So no function is defined. It will always return "true"
		// removed .register() is no longer needed
		ConditionComment
			.registerRunListener(async (args,state) => {return true})

		ConditionFixThis
			.registerRunListener(async (args,state) => {return true});
		
		ActionComment
			.registerRunListener(async (args,state) => {return true});
		
		ActionFixThis
			.registerRunListener(async (args,state) => {return true});

		this.log(`${Homey.manifest.id} ready for action   ----------------------`)
	}
	
}
// add the name of your app here, the name is the class name as defined earlier
module.exports = FlowComments;
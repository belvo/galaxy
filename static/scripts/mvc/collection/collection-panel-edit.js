define(["mvc/collection/collection-panel","mvc/collection/collection-model","mvc/collection/collection-li-edit","mvc/base-mvc","utils/localization","ui/editable-text"],function(a,b,c,d,e){var f=a.CollectionPanel,g=f.extend({DatasetDCEViewClass:c.DatasetDCEListItemEdit,NestedDCDCEViewClass:c.NestedDCDCEListItemEdit,initialize:function(a){f.prototype.initialize.call(this,a)},_setUpBehaviors:function(a){if(a=a||this.$el,f.prototype._setUpBehaviors.call(this,a),this.model&&Galaxy.currUser&&!Galaxy.currUser.isAnonymous()){var b=this,c="> .controls .name";a.find(c).attr("title",e("Click to rename collection")).tooltip({placement:"bottom"}).make_text_editable({on_finish:function(a){var d=b.model.get("name");a&&a!==d?(b.$el.find(c).text(a),b.model.save({name:a}).fail(function(){b.$el.find(c).text(b.model.previous("name"))})):b.$el.find(c).text(d)}})}},toString:function(){return"CollectionPanelEdit("+(this.model?this.model.get("name"):"")+")"}}),h=g.extend({DatasetDCEViewClass:c.DatasetDCEListItemEdit,toString:function(){return"ListCollectionPanelEdit("+(this.model?this.model.get("name"):"")+")"}}),i=h.extend({toString:function(){return"PairCollectionPanelEdit("+(this.model?this.model.get("name"):"")+")"}}),j=i.extend({_setUpBehaviors:function(a){f.prototype._setUpBehaviors.call(this,a)},toString:function(){return"NestedPairCollectionPanelEdit("+(this.model?this.model.get("name"):"")+")"}}),k=g.extend({NestedDCDCEViewClass:c.NestedDCDCEListItemEdit.extend({foldoutPanelClass:j}),toString:function(){return"ListOfPairsCollectionPanelEdit("+(this.model?this.model.get("name"):"")+")"}});return{CollectionPanelEdit:g,ListCollectionPanelEdit:h,PairCollectionPanelEdit:i,ListOfPairsCollectionPanelEdit:k}});
//# sourceMappingURL=../../../maps/mvc/collection/collection-panel-edit.js.map
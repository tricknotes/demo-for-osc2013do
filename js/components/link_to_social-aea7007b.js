Account.LinkToSocialComponent=Ember.Component.extend({tagName:"a",target:"_blank",mediaType:null,account:null,attributeBindings:["href","target","title"],href:function(){var t=this.get("mediaType"),e=this.get("account"),n=Account.LinkToSocialComponent.mediaToUrls[t];return n.fmt(e)}.property("mediaUrl","account"),title:function(){return"@"+this.get("account")}.property("account"),iconClass:function(){return"icon-"+this.get("mediaType")}.property("mediaType")}),Account.LinkToSocialComponent.mediaToUrls={twitter:"https://twitter.com/%@",github:"https://github.com/%@"};
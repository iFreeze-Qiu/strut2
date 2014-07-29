'use strict';

var Events = require('events/Events');
var ComponentFactory = require('./SlideComponentFactory');
var Css = require('html/Css');
var _ = require('lodash');

function Slide(slideNode) {
	this.style = Css.textToObject(slideNode.style.cssText);
	this.classes = node.className.split(' ');
	
	this.components = _.map(slideNode.children, ComponentFactory);
}

var proto = Slide.prototype = Object.create(Events);

Slide.create = function(rawContents) {
	return new Slide(rawContents);
}

module.exports = Slide;
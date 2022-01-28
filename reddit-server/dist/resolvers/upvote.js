"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpvoteResolver = void 0;
const Upvote_1 = require("src/entities/Upvote");
const type_graphql_1 = require("type-graphql");
let UpvoteResolver = class UpvoteResolver {
    hello() {
        return "ight";
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UpvoteResolver.prototype, "hello", null);
UpvoteResolver = __decorate([
    (0, type_graphql_1.Resolver)(Upvote_1.Upvote)
], UpvoteResolver);
exports.UpvoteResolver = UpvoteResolver;
//# sourceMappingURL=upvote.js.map
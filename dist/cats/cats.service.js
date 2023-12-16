"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
let CatsService = class CatsService {
    create(body) {
        console.log(body);
        return body;
    }
    findAll() {
        let cats = [
            {
                name: 'Journy',
                breed: 'Foxy',
                age: 1,
            },
            {
                name: 'Grecc',
                breed: 'Foxy',
                age: 2,
            },
            {
                name: 'Kata',
                breed: 'Doxy',
                age: 0.5,
            },
            {
                name: 'Litos',
                breed: 'Loxy',
                age: 2,
            },
        ];
        return cats;
    }
};
exports.CatsService = CatsService;
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)()
], CatsService);
//# sourceMappingURL=cats.service.js.map
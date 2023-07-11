var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    listCats: (event) => __awaiter(this, void 0, void 0, function* () {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "List cats",
            }, null, 2),
        };
    }),
    showCat: (event) => __awaiter(this, void 0, void 0, function* () {
        const { id } = event.pathParameters;
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Show cat " + id,
            }, null, 2),
        };
    }),
    editCat: (event) => __awaiter(this, void 0, void 0, function* () {
        const { id } = event.pathParameters;
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "edit cat " + id,
            }, null, 2),
        };
    }),
    createCat: (event) => __awaiter(this, void 0, void 0, function* () {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Create cat",
            }),
        };
    }),
    deleteCat: (event) => __awaiter(this, void 0, void 0, function* () {
        const { id } = event.pathParameters;
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Delete cat " + id,
            }, null, 2),
        };
    }),
};

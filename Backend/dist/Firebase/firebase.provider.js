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
exports.FirebaseProvider = void 0;
var admin = require("firebase-admin");
var common_1 = require("@nestjs/common");
var FirebaseProvider = (function () {
    function FirebaseProvider() {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: "foodtracker-5a7d4",
                clientEmail: "firebase-adminsdk-tsgb1@foodtracker-5a7d4.iam.gserviceaccount.com",
                privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDvawbtQy6yApNK\n3l5uf4kfRQhlvUkRL9z2E7AW9b+xbK7r6Scs+N1S9ob/k2FwPkoN0P8KY23rz+/2\nSovw0PsodZ+fyANWkl1PWNWS56MHJR3FGsNAaZPiV+nlRKJp6ByqZmKDDC2REpd/\nplBX78Qj8mxG1dU14glr3g7Ni1opr+kUAo3GlpsA1dcvCjxBKOLSpmoU+da1THEp\nemVFDpRQMcwj9/GsMfEC5CLIHT+oCus6FQLGBQ7f9lieikA9qahUUXe18dcPx9lg\n7G0to5pFbjFxfYtectZR+N0hX4oydGBD272y173tbrcf1yGMJSGc/IXQamXHTBfX\n7Po4jv6TAgMBAAECggEAaCKzyRhLI7c2DL8K8OH9KQI0RFhgAx8/6zKmCV6Lqeb9\ncHQhi5CVZ8P99QVMQO9+82J/xCt6QLLZi1ViZ/TmAXOj4fIz7YBNILmhb7vb77wn\npjddTNN/NNiLTiMbx5fjfAR7fceavDqLdcTHtm/97qq/iNHyYnT2JxpXcvTVW0Km\nby7cYKmfy/WAl6zLUWtlO/BoHUCQbwKd+tABF1EnwIWrvH9HjQaOUm5VUoMyFC38\nABXaS/AjGpX00G+FeSUysJpk6P7mmdmBnhAP0sCqvimObNtDfxwgnnHmVIZZroop\nVLMNrFdDutJX3gEdAkR2iV/ICJAnkYP7lALSV6G46QKBgQD4Gx/8RN/MS0WSY5CU\nqEk9HJCYnVeu6/DucjUSaorTU1h5MvPPfckquJQt9f2wY/dJTS/WIpsV0wlHOuuy\nch2saalK3CyElio3OAqfjBpIWREPb/UmovHd9VXW9VQRmcox3viA2ai+d8lcEe9d\ncef7bNrVmBsjodhavJ1FRvRKiwKBgQD3CSMyltdanVuZzyrUuAjpj+cE6pys7fnU\n9R8FkAWXkADVFYgYiIMMjjpHceBwE7XfRaYF4keUrzYvdSNCI9bZTV4n7PybTCir\nNi5OeqZkAeyAFHCkCw3Nxk3H9pgrkvxiCNTv4UoMFMifDHpCbANZ2wcENYYdrttR\nKJA1Kp0FGQKBgAwAM+Hd6v1Uvr6/9iRap4A/O3dGVRFu9C50c8C6SpDCPUtPfZ+R\ntANO/kvi1CyOCU4QX7n53oqFtLMvVGtDPdAzJC8syzJ2mQAmw8zH2BWbyUl33uHJ\ni+1yin5lS3W2fKNA58BDxve/j4vWij943QG6WDNwsg9dKrvo16qcLgDVAoGAGD22\nTX2Nzl+IoJQ6sLsKbNjpI4teKn4DuQkArUwPsGq6Gi7NtxKWQYInZ+Fd08GrZChy\nfTtSKN30pD2LYy8fIx27cpGHzDlx+DMN4jeY4lFqArt+viozhZDDCy9AiW4YBAq3\n0n46BOt5MFpKGQB+Z6/dhWU3Lux8qv8e/4iZ9ekCgYBfqt+lBvT13xJDXRbiYfDT\nk4h3uTrlKo7RfYWkcsK0FKSdAZmNNwsp57DIInZ7KJrkTu1Szefj1Tvw7Wows7Qk\n3cTGKzI8TunchqcK0B6mDX6+qHYCL8YoUbHYuSgtb7SYiigML4z+uNeya+fjfYrr\nBxCSwDGysHdbuXwe6Wdg7A==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
            }),
        });
        this.firestore = admin.firestore();
    }
    FirebaseProvider.prototype.getFirestore = function () {
        return this.firestore;
    };
    FirebaseProvider = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [])
    ], FirebaseProvider);
    return FirebaseProvider;
}());
exports.FirebaseProvider = FirebaseProvider;
//# sourceMappingURL=firebase.provider.js.map
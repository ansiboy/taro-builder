import MobileBindingPage from "src/modules/account-security/mobile-binding";

export interface Rule {
    validate: (value) => boolean | Promise<boolean>,
    error?: ErrorMessage,
    type: keyof typeof rules,
}

type ErrorMessage = string | (() => string);

export let rules = {
    required(msg?: ErrorMessage): Rule {
        let obj: Rule = {
            type: "required",
            validate(value) {
                return (value || "") != "";
            },
            error: msg,
        }

        return obj;
    },
    mobile(msg?: ErrorMessage) {
        let mobileRegex = /^1[34578]\d{9}$/;
        let obj: Rule = {
            type: "mobile",
            validate(value) {
                return mobileRegex.test(value);
            },
            error: msg,
        }
        return obj;
    }
}


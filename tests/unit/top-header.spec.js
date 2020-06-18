import TopHeader from "@/components/Top-Header.vue";
import { shallowMount } from "@vue/test-utils";

describe("topHeader.vue", ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallowMount(TopHeader, {
            methods: { setupFirebase: () => {}}
        })
    })

    it("renders", ()=> {
        expect(wrapper.exists()).toBe(true);
    })

    it("does h1 exist, when the user is logged in", () => {
        expect(wrapper.find("h1").text()).toBe("Logged in")
    })
})
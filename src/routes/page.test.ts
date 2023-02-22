import { describe, test, expect } from "vitest";
import { render } from "@testing-library/svelte";
import Page from './+page.svelte';

describe('+page.svelte', () => {
    test('should render', () => {
        const rendered = render(Page);
        expect(rendered).toBeDefined();
    });
});

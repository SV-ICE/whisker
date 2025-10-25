/* import { createRoot } from 'react-dom/client';

test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container); 
    root.render(<SamuraiJSApp tab="home" />);
    root.unmount();
}); */

/* import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('Profilestatus component', () => {
	test('status from props should be in the state', () => {
		const component = create(<ProfileStatus status='Meow meow' />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe('');
	})
}) */

import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be displayed", () => {
        render(<ProfileStatus status="Meow meow" />);
        const statusElement = screen.getByText("Meow meow");
        expect(statusElement).toBeInTheDocument();
    });
    test("after creation <span> should be displayed", () => {
        const { container } = render(<ProfileStatus status="Meow meow" />);
        const spanElement = container.querySelector("span");
        expect(spanElement).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        render(<ProfileStatus status="Meow meow" />);
        const inputElement = screen.queryByRole('textbox');
        expect(inputElement).not.toBeInTheDocument();
    });
    test("input should be displayed in editMode", () => {
        render(<ProfileStatus status="Meow meow" />);
        const inputElement = screen.queryByRole('textbox');
        expect(inputElement).not.toBeInTheDocument();
    });
	test("<input> should be displayed in editmode instead of span", () => {
        render(<ProfileStatus status='Meow meow' />);
        const spanElement = screen.getByText('Meow meow');
        fireEvent.click(spanElement);
        const updatedSpanElement = screen.queryByText('Meow meow');
        expect(updatedSpanElement).toBeNull();
        const inputElementInEditMode = screen.getByRole('textbox');
        expect(inputElementInEditMode).toBeInTheDocument();
        expect(inputElementInEditMode).toHaveValue('Meow meow');
    });
});

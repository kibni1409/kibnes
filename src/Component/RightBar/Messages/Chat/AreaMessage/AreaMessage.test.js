import { render, screen} from "@testing-library/react"
import AreaMessage from "./AreaMessage";
import userEvent from "@testing-library/user-event";

it("Area onChange", () => {
    render(<AreaMessage />)

    userEvent.type(screen.getByRole('textbox'), "React");

    expect(screen.getByRole('textbox').value).toBe("React")
})


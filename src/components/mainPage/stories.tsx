import MainPage from ".";
import { MainPageProps } from "./types";
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<MainPageProps> = {
    title: "Components/MainPage",
    component: MainPage,
}

export default meta;
type Story = StoryObj<MainPageProps>

export const Default: Story = {
    render: () => <MainPage>Oi</MainPage>,
}
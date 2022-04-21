import { OrdersTable } from '@/components/dashboard/table/orders-table'
import { DashboardTemplate } from '@/components/dashboard/template'
import { ChevronDown } from 'react-feather'

import { OrdersTab } from '@/components/dashboard/tabs/orders'
import { OrderTab } from '@/components/dashboard/tabs/tab.style'

import {
    FilterContainer,
    FilterDetails,
    FilterDropdown,
    CurrentSelection,
    HeadingAndSearch,
    SearchBtn,
    SearchContainer,
    SearchOrderInput,
    SelectionList,
    SelectionItem,
} from './home.style'

const Dashboard = () => {
    return (
        <>
            <DashboardTemplate pageTitle="Manage Orders">
                <HeadingAndSearch>
                    <h2>Manage Orders</h2>

                    <SearchContainer>
                        <SearchOrderInput
                            type="text"
                            placeholder="Search Order ID"
                        />

                        <SearchBtn>Search</SearchBtn>
                    </SearchContainer>
                </HeadingAndSearch>

                <OrdersTab>
                    <OrderTab isActive>
                        <span>0</span>
                        Pending
                    </OrderTab>

                    <OrderTab>
                        <span>0</span>
                        Unshipped
                    </OrderTab>

                    <OrderTab>Canceled</OrderTab>
                    <OrderTab>Shipped</OrderTab>
                </OrdersTab>

                <FilterContainer>
                    <FilterDetails>
                        <h3>25 orders</h3>
                        <span>Last 30 days</span>
                    </FilterDetails>

                    <FilterDropdown>
                        <CurrentSelection>
                            <span>Date Range: Last 15 days</span>
                            <ChevronDown />
                        </CurrentSelection>

                        <SelectionList>
                            <SelectionItem>Last day</SelectionItem>
                            <SelectionItem>Last 7 days</SelectionItem>
                            <SelectionItem isActive>Last 15 days</SelectionItem>
                            <SelectionItem>Last 30 days</SelectionItem>
                        </SelectionList>
                    </FilterDropdown>
                </FilterContainer>

                <OrdersTable />
            </DashboardTemplate>
        </>
    )
}

export default Dashboard

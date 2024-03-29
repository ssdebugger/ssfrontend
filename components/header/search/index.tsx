
import { Search as SearchIcon, X } from 'react-feather'
import { ProductCard } from './product-card'
import {
    SearchContainer,
    SearchInputWrapper,
    SearchInput,
    SearchResultsWrapper,
    SearchResult,
    SearchResultContainer,
    SearchCloseBtn,
} from './search.style'
import { useState } from 'react'
import { Background } from '../desktop-nav/desktop-nav.style'

export const Search = () => {
    const [search, setSearch] = useState([])
    var timer
    function debounce(key) {
        if (timer !== undefined && timer !== null) {
            clearTimeout(timer)
            timer = setTimeout(function () {
                fetch(
                    'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/searchapi?key=' +
                        key
                )
                    .then((response) => response.json())
                    .then((response) => setSearch((search) => response['body']))
            }, 1000)
        } else {
            timer = setTimeout(function () {
                fetch(
                    'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/searchapi?key=' +
                        key
                )
                    .then((response) => response.json())
                    .then((response) => {
                        setSearch((search) => response['body'])
                    })
            }, 1000)
        }
    }

    const inputchange = (e) => {
        debounce(e.target.value)
    }

    const handleInputFocus = () => {
        document.body.style.overflow = 'hidden'
    }

    const handleOffFocus = () => {
        document.body.style.overflow = 'auto'
    }

    return (
        <SearchContainer>
            <SearchInputWrapper>
                <SearchIcon width={20} height={20} />
                <SearchInput
                    onChange={(e) => inputchange(e)}
                    type="text"
                    placeholder="Search..."
                    onFocus={handleInputFocus}
                    onBlur={handleOffFocus}
                />

                <SearchCloseBtn>
                    <X width={16} height={16} strokeWidth={2.5} />
                </SearchCloseBtn>

                <Background />
            </SearchInputWrapper>

            <SearchResultsWrapper>
                <SearchResultContainer>
                    {search.map((x) => (
                        <SearchResult key={x['product_name']['S']}>
                            <ProductCard
                                name={x['product_name']['S']}
                                img={x['image']}
                                sku={x['sku_code']['S']}
                                url={x['url_name']['S']}
                                description={x['short_description']['S']}
                            />
                        </SearchResult>
                    ))}
                </SearchResultContainer>
            </SearchResultsWrapper>
        </SearchContainer>
    )
}

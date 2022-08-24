import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Pagination from "./UI/pagination/Pagination";
import PaginationItem from "./UI/pagination/PaginationItem";

const Pages = observer(() => {
    const {product} = useContext(Context)
    const pageCount = Math.ceil(product.totalCount / product.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination>
            {pages.map(page =>
                <PaginationItem
                    key={page}
                    active={product.page === page}
                    onClick={() => {
                        product.setPage(page)

                    }}
                >
                    {page}
                </PaginationItem>
            )}
        </Pagination>
    );
});

export default Pages;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "query-string";

export default function Category({
  category_data,
  sports,
  brands,
  selectCategory,
  getProductByBrand,
}) {
  const { search } = useLocation();
  let query = qs.parse(search);
  // console.log(query.sports);
  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
      <div className="sidebar">
        <div className="product-widget">
          <h3 className="widget-title mb-30">Sports</h3>
          <ul className="product-categories">
            {sports?.map((item, key) => (
              <>
                <li className="">
                  <Link
                    to={`/products?sport=${item.id}`}
                    style={{ color: query.sport == item.id ? "red" : "" }}
                  >
                    {item.name}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>

        <div className="product-widget">
          <h3 className="widget-title mb-30">categories</h3>
          <ul className="product-categories">
            {category_data?.map((item, key) =>
              category_data ? (
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => selectCategory(item.id)}
                    style={{ color: query.category == item.id ? "red" : "" }}
                  >
                    {item.name} <span>( {item.count} ) </span>
                  </a>
                </li>
              ) : (
                "Not Category Found "
              )
            )}
          </ul>
        </div>

        <div className="product-widget">
          <h3 className="widget-title mb-30">Brands</h3>
          <ul className="product-categories">
            {brands?.map((item, key) =>
              brands ? (
                <li>
                  <a
                    href="javascript:void(0)"
                    onClick={() => getProductByBrand(item.id)}
                  >
                    {item.name} <span>({item.count}) </span>
                  </a>
                </li>
              ) : (
                <li>ksdjfnksdjn</li>
              )
            )}
          </ul>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

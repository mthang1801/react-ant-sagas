// import { useState } from "react";
/* eslint-disable */
import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SvgIconCreateBill from "src/assets/svg/SvgIconCreateBill";
import SvgIconDown from "src/assets/svg/SvgIconDown";

import { localGetAccount } from "src/utils/localStorage";

import SvgDashboard from "src/assets/svg/SvgDashboard";
import SvgIconMoveRight from "src/assets/svg/SvgIconMoveRight";
import SvgConfigFlatform from "src/assets/svg/SvgConfigFlatform";
import SvgScheduler from "src/assets/svg/SvgScheduler";
import SvgCron from "src/assets/svg/SvgCron";
import SvgStore from "src/assets/svg/SvgStore";
import SvgInstallStore from "src/assets/svg/SvgInstallStore";
import SvgProduct from "src/assets/svg/SvgProduct";
import SvgOrders from "src/assets/svg/SvgOrders";
import SvgShipping from "src/assets/svg/SvgShipping";
import SvgFeatures from "src/assets/svg/SvgFeatures";
import SvgSuppliers from "src/assets/svg/SvgSuppliers";
import routerNames from "src/utils/data/routerName";
import SvgCustomer from "src/assets/svg/SvgCustomer";
import SvgCodNav from "src/assets/svg/SvgCodNav";
import SvgDocument from "src/assets/svg/SvgDocument";
import SvgCreateOrder from "src/assets/svg/SvgCreateOrder";
function Sidenav(props: { color: any }) {
	const [dashboard, setDashboard] = useState(false);
	const listMenu = [
		{
			id: 1,
			title: "Thiết lập hệ thống",
			iconOpen: <SvgIconDown fill="#fff" />,
			iconClose: <SvgIconMoveRight fill="#fff" />,
			showAll: false,
			data: [
				{
					itemId: 1,
					icon: <SvgConfigFlatform fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Thiết lập sàn TMĐT",
					path: "platform-ecom",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 2,
					icon: <SvgScheduler fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Scheduler",
					path: "scheduler",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 3,
					icon: <SvgCron fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Cron function",
					path: "cron-function",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 3,
					icon: <SvgCron fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Module & Function",
					path: "module-functions",
					privilege_id: 24,
					isShow: true
				}
			]
		},
		{
			id: 2,
			title: "Quản lý đơn hàng",
			iconOpen: <SvgIconDown fill="#fff" />,
			iconClose: <SvgIconMoveRight fill="#fff" />,
			showAll: false,
			data: [
				{
					itemId: 1,
					icon: <SvgCreateOrder fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Tạo đơn",
					path: "orders/create",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 1,
					icon: <SvgOrders fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Đơn hàng",
					path: "orders",
					privilege_id: 24,
					isShow: true
				}
			]
		},
		{
			id: 2,
			title: "Quản lý sản phẩm",
			iconOpen: <SvgIconDown fill="#fff" />,
			iconClose: <SvgIconMoveRight fill="#fff" />,
			showAll: false,
			data: [
				{
					itemId: 1,
					icon: <SvgProduct fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Sản phẩm",
					path: "products",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 2,
					icon: <SvgInstallStore fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Nhập hàng",
					path: "install-store",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 3,
					icon: <SvgStore fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Quản lý kho",
					path: "stores",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 4,
					icon: <SvgSuppliers fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Nhà cung cấp",
					path: "supplier",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 5,
					icon: <SvgFeatures fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Features",
					path: "features",
					privilege_id: 24,
					isShow: true
				}
			]
		},
		{
			id: 2,
			title: "Vận chuyển",
			iconOpen: <SvgIconDown fill="#fff" />,
			iconClose: <SvgIconMoveRight fill="#fff" />,
			showAll: false,
			data: [
				{
					itemId: 1,
					icon: <SvgShipping fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Đối tác vận chuyển",
					path: "shipping",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 2,
					icon: <SvgShipping fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Cấu hình giao hàng",
					path: "#",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 3,
					icon: <SvgDocument fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Quản lý vận đơn",
					path: "bills",
					privilege_id: 24,
					isShow: true
				},
				{
					itemId: 4,
					icon: <SvgCodNav fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Đối soát COD",
					path: "cod",
					privilege_id: 24,
					isShow: true
				}
			]
		},
		{
			id: 2,
			title: "Khách hàng",
			iconOpen: <SvgIconDown fill="#fff" />,
			iconClose: <SvgIconMoveRight fill="#fff" />,
			showAll: false,
			data: [
				{
					itemId: 1,
					icon: <SvgCustomer fill="#fff" style={{ transform: "scale(0.8)" }} />,
					title: "Quản lý khách hàng",
					path: "customers",
					privilege_id: 24,
					isShow: true
				}
			]
		}
	];

	const { pathname } = useLocation();
	// const page = pathname.replace("/", "");
	const page = pathname.split("/");
	const dataUser = localGetAccount();
	const [dataMenu, setDataMenu] = useState(listMenu);

	/****************************START**************************/
	/*                         Life Cycle                      */

	useEffect(() => {
		if (dataUser) {
			let _dataUser = JSON.parse(dataUser);
			let menu = _dataUser?.userData?.menu;
			if (menu) {
				// listMenu
				let _listMenu = [...listMenu];
				menu.forEach((item: any) => {
					let i = 0;
					while (i < _listMenu.length) {
						let _index = _listMenu[i].data.findIndex((e) => e.privilege_id === item.privilege_id);
						if (_index !== -1) {
							_listMenu[i].data[_index] = {
								..._listMenu[i].data[_index],
								isShow: true
							};
							break;
						}
						i++;
					}
				});
				_listMenu.forEach((e, index) => {
					_listMenu[index].data = e.data.filter((item) => item.isShow === true);
				});
				setDataMenu(_listMenu);
			}
		}
	}, [dataUser]); // eslint-disable-line react-hooks/exhaustive-deps

	/**************************** END **************************/

	/****************************START**************************/
	/*                          Function                       */

	const btnShowAll = (index: number) => {
		const _listMenu = [...dataMenu];
		_listMenu[index] = {
			..._listMenu[index],
			showAll: !_listMenu[index].showAll
		};
		setDataMenu(_listMenu);
	};
	/**************************** END **************************/

	/****************************START**************************/
	/*                         Component                       */

	/**************************** END **************************/

	/****************************START**************************/
	/*                      Return Component                   */

	return (
		<div id="sidenav" className="h-full sidenav bg-accent_color_5_6">
			<Link
				to={`/dashboard`}
				className={`dashboardLink ${dashboard ? "activeLink" : ""}`}
				onClick={() => setDashboard(true)}
			>
				<SvgDashboard fill="#fff" /> <span className="db-title">Dashboard</span>
			</Link>
			{dataMenu.map(
				(e, index) =>
					e.data.length !== 0 && (
						<Col key={index} className="p-1">
							<div
								className="button_navBar"
								onClick={(e) => {
									e.preventDefault();
									btnShowAll(index);
								}}
							>
								<Row align="middle" className="parent-menu">
									<span
										className="icon"
										// style={{
										//   background: page === "dashboard" ? 'red' : "",
										// }}
									>
										{e.showAll ? (
											<div className="iconLeft">{e.iconOpen}</div>
										) : (
											<div className="iconLeft">{e.iconClose}</div>
										)}
									</span>
									<span className="titleMenu ">{e.title}</span>
								</Row>
							</div>

							{e.showAll &&
								e.data.map(
									(item, indexItem) =>
										item.isShow && (
											<NavLink
												key={indexItem}
												to={`/${item.path}`}
												onClick={() => {
													setDashboard(false);
												}}
											>
												<Row
													align="middle"
													className={`${
														page.length > 0 && page[1] + (page[2] ? page[2] : "") === item.path.replace("/", "")
															? "child-menu-click"
															: "child-menu"
													}`}
													style={
														{
															// background: page === item.path ? 'red' : "",
														}
													}
												>
													<span className="icon">
														<div className="iconLeft">{item.icon}</div>
													</span>
													<span className="titleMenu ">{item.title}</span>
												</Row>
											</NavLink>
										)
								)}
						</Col>
					)
			)}
		</div>
	);

	/**************************** END **************************/
}

export default Sidenav;

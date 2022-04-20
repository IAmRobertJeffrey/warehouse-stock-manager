import { assign, createMachine } from "xstate";


const logout = () =>
{
	localStorage.removeItem("token");
	return true;
}

const addProductOrLocation = async (context, event) =>
{
	// if (context.initialScanResults.result.type === "product")
	// {
	const obj =
	{
		product_name: context.newProductData.newProductName,
		product_barcode: context.initialBarcode,
		product_reference: context.newProductData.newProductReference
	}

	const response = await fetch(`${context.apiLocation}/product`, {
		method: "POST",
		headers: {
			authorization: localStorage.getItem("token"),
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(obj)

	})
	const data = await response.json();
	if (data)
	{
		window.alert(JSON.stringify(data))
		return true;
	}
	else
	{
		window.alert(JSON.stringify("nothing " + data))
	}
	// }
	// else if (context.initialScanResults.result.type === "location")
	// {

	// }
}

const checkInitialBarcode = async (context, event) =>
{
	window.alert("Test alert");
	const response = await fetch(`${context.apiLocation}/product_location/barcode/${context.initialBarcode}`, {
		method: "POST",
		headers: {
			authorization: localStorage.getItem("token"),
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
	const data = await response.json();

	const doesNotExist =
	{
		response: "Barcode does not exist."
	}

	if (JSON.stringify(data) !== JSON.stringify(doesNotExist))
	{
		window.alert("The barcode does exist. -----" + JSON.stringify(data))
		assign({ initialScanResults: data })
		return true;
	}
	else
	{
		window.alert("The barcode does not exist. -----" + JSON.stringify(data))
		return Error;
	}
}

const validateLogin = (context, event) =>
{
	if (event.loginData.username !== '' && event.loginData.password !== '')
	{
		return true;
	}
	return false;
}

const submitLogin = async (context, event) =>
{

	const response = await fetch(`${context.apiLocation}/auth/login`, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username: context.loginData.username, password: context.loginData.password })
	})

	const data = await response.json();

	if (data.token)
	{
		localStorage.setItem("token", "Bearer " + data.token)
		return true;
	}
	else
	{
		console.log("errored");
		throw Error;
	}
}


export const AppMachine =
	/** @xstate-layout N4IgpgJg5mDOIC5QEEAOqAEBZAhgYwAsBLAOzADoAZAeyhggwEkTyBlMHAJ0IGJqSAcjgBuRKDgAuYVnhwkZnMGBKJQqarCISi-VSAAeiAAwAaEAE9jAXytm0mXIVIUadSExYy5CpZ9kk+eX89dU1tXSQDRABmACZY8nik5OTos0sEWIAWciyATgLCosKbO3RsfGIyKlp6DzZ-H2UanAhSKECaVpCNLR0VSMMEOISUsfi0i0Rs3OK5gtKQewqnatc65gbvPEVm5AgIATAAdwAFTmoIAFc8CQB5ThpZcID+ADFSIlgCfYhzy5u90e1Ge-R6YTBgxi8US4xSkwyM3y82Ki2WjiqLlq7k2XiCuxYACU4FcADYSQK-VgSEEAa3BfQioCGI1hcKSCOmOWRKJKtiW5QxzhqbgYuMaO185GJsDJFP4xIAttRhNIaXh6ZFQoyBszoaN2Rz0lzZry+WUHJVhescX5tgTpSTyYEsCq1XSGS89CyYYajVNMtyzeaBZbVljRfU8U0iU75YITnjPZC9cNfX7YpzA6bg2jBVa1tixXb8VKqeraQBFK5ybQScyBD4kL4-A7Uj1a3peqFpg1+rNI4MLfnogsRjYlmOO5Wq9sa6u1rQN96fb5Kt1zzVqLspqK9tmGgdBod5sOYkUTral5qu2cV8i39pvC6Kq+BJOdiFMvesjOZ43ZjyZqnis542sWV5Tre7oag+KrtAAKtQb78B+25frqP7pv2AGDieI75uGF62pBko3hu96PiQUBIS0bTUZ01DdJ+OrevqB7skeObAQRZ7WkWUYSg60GbnBqoLiQdbLiQTYtiJFbJt+Pp9oeuHHrmvGgfxkbivaUryXS5C-EcxxPJI-SUgcZnduhrE9r+GZcUBvIgUKhY6ZOZEsAZsFdPRHT8H5imYcpHFwk5Q55K5Y7ERB0ZeYEQiiOIUjsFwhAxsFbEIKYAZGNFRHgR4jFQNQVwSFlPYAIxGAAbAArOQtWxAAHAA7C1eTIlV0RVfVAFVbVbXkEY9UFC10RGFkbV5LEbX1bEBVgQJdzlSKpAlaQlWprlGT5ZpblYq07Q8BA-AUKQwjULSFCEGAGquKQrA3HgcDwCxNl7rt1gHTFfknWAnAXJw5CoKSkgAGbUJwr53Q9tBPS9b3bV9AH7fyJCXHAeijoVAm4hw3AECjQzfTlS3aZe8UOmhIDap9oV-hF+EWlp7lU0JUr-dRJPsUzancS5v14x5pEOsZJz-NctwPNZu707ujOOQLzkohT7MkdTUoynKvP7vzAZ4RprOHbFgl6XsbYVhJUl6w5OGG+pPEm39+OeQ6653nSNtLnb2GqY7gtq8Ly2i1r5Fe7BVFQM+1CvrTCtKXzyuB6r8zq+OmucxHMG0mJT4vnrsR5C1YXjFmAC0WSl0BE1TfVM1GFVGdm7p17eRRhnR7RCc7kn+sp4iTtCy7IscxbHeR3n3fIdzUB+ypnEq5FLdFW3UGd1H8HUUhRcl2XYyV9X3F11kDd5E3q9u2L+mb9Pbo+-WC8H-Cy8s6GbOZ3F2eT7nRkHCZOW35E4hWTg7IeQd04h0plnCeYk-5z2fgbCBac5hXzDj-eBm4i5tRyMgxAFcqqxCqtxWqtUjB5D6i1dB4925F3qkYF+qQAKEK6txfIPU2rRDakYaINDbR6wrtkFhsQhrcTiFVCag0pr8IYKtCQ61MIgOymTfao9Q51HkYI4RAYK5tQSMUU+58r7HR5h9RWiAqrDQ6sQ+qDd6otSMKItqtUAJZGiDkWa+QWpDS6mQiYGdBHVxYR4xhQFaotWIUYFq9Vap8JsFYIAA */
	createMachine({
		context: {
			loginData: { username: '', password: '' },
			apiLocation: 'https://api.warehouse.robertjeffrey.co.uk',
			initialBarcode: '',
			initialScanResults: [],
			newProductData: { newProductName: '', newProductReference: '' }
		},
		"initial": "Logged Out",
		"states": {
			"Logged In": {
				"initial": "Search",
				"states": {
					"Search": {
						"on": {
							"onNavigateScanScreen": {
								"target": "ScanScreen"
							}
						}
					},
					"ScanScreen": {
						"initial": "Scan",
						"states": {
							"Scan": {
								"on": {
									"onScan": {
										"actions": assign({ initialBarcode: (context, event) => event.initialBarcode }),
										"target": "Loading"
									}
								}
							},
							"Loading": {
								"invoke": {
									"src": checkInitialBarcode,
									"id": "checkInitialBarcode",
									"onDone": [
										{
											"target": "Results"
										}
									],
									"onError": [
										{
											"target": "AddNewProductOrLocation"
										}
									]
								}
							},
							"AddNewProductOrLocation": {
								"on": {
									"onFinishAddProductOrLocation": {
										"invoke": {
											"src": addProductOrLocation,
											"id": "AddProductOrLocation",
											"onDone": {
												"target": "Scan"
											},
											"onError": {
												"target": "Scan"
											}
										},
										"target": "Scan"
									}
								}
							},
							"Results": {
								"on": {
									"onAddStock": {
										"target": "AddStockQuantity"
									},
									"onRemoveStock": {
										"target": "RemoveStockQuantity"
									},
									"onMoveStock": {
										"target": "#App Machine.Logged In.ScanScreen.MoveStock.MovingFrom"
									},
									"onNewScan": {
										"target": "Scan"
									}
								}
							},
							"AddStockQuantity": {
								"on": {
									"onFinishAddStock": {
										"target": "Scan"
									}
								}
							},
							"RemoveStockQuantity": {
								"on": {
									"onFinishRemoveStock": {
										"target": "Scan"
									}
								}
							},
							"MoveStock": {
								"initial": "MovingFrom",
								"states": {
									"MovingFrom": {
										"initial": "Scan",
										"states": {
											"Scan": {
												"on": {
													"onScan": {
														"target": "#App Machine.Logged In.ScanScreen.MoveStock.Loading"
													}
												}
											}
										}
									},
									"MovingTo": {
										"initial": "Scan",
										"states": {
											"Scan": {
												"on": {
													"onScan": {
														"target": "Loading"
													}
												}
											},
											"Loading": {
												"on": {
													"onLoad": [
														{
															"cond": "movingToExists",
															"target": "#App Machine.Logged In.ScanScreen.MoveStock.MoveQuantity"
														},
														{
															"target": "#App Machine.Logged In.ScanScreen.MoveStock.AddNewLocation"
														}
													]
												}
											}
										}
									},
									"MoveQuantity": {
										"on": {
											"onFinishMoveStock": {
												"target": "#App Machine.Logged In.ScanScreen.Scan"
											}
										}
									},
									"AddNewLocation": {
										"on": {
											"onAddLocation": [
												{
													"cond": "locationWasAdded",
													"target": "MoveQuantity"
												},
												{}
											]
										}
									},
									"Loading": {
										"on": {
											"onLoad": [
												{
													"cond": "movingFromExists",
													"target": "#App Machine.Logged In.ScanScreen.MoveStock.MovingTo.Scan"
												},
												{
													"target": "#App Machine.Logged In.ScanScreen.MoveStock.MovingFrom.Scan"
												}
											]
										}
									}
								}
							}
						},
						"on": {
							"onNavigateSearchScreen": {
								"target": "Search"
							}
						}
					}
				},
				"on": {
					"onLogout": {
						"cond": logout,
						"target": "#App Machine.Logged Out.Login"
					}
				}
			},
			"Logged Out": {
				"initial": "Login",
				"states": {
					"Login": {
						"on": {
							"onLogin": {
								"actions": assign({ loginData: (context, event) => event.loginData }),
								"cond": validateLogin,
								"target": "#App Machine.Loading"
							},
							"onUseToken": {
								target: "#App Machine.Logged In.Search"
							},
						},

					}
				}
			},
			"Loading": {
				"invoke": {
					"src": submitLogin,
					"id": "checkLoginSuccess",
					"onDone": [
						{
							"target": "#App Machine.Logged In.Search"
						}
					],
					"onError": [
						{
							"target": "#App Machine.Logged Out.Login"
						}
					]
				}
			}
		},
		"id": "App Machine"
	})

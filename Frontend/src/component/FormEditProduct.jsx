import React from 'react'

const FormEditProduct = () => {
    return (
        <div>
            <h1 className="title">Product</h1>
            <h2 className="subtitle">Update Product</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form >
                            <p className="has-text-centered"></p>
                            <div className="field">
                                <label className="label">Product Name</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Product Price</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Price"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEditProduct
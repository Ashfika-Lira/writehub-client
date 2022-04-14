import React from 'react';


const Approve = () => {
    return (
        <div class="container flex justify-center mx-auto pt-20">
            <div class="flex flex-col">
                <div class="w-full">
                    <div class="border-b border-gray-200 shadow">
                        <table>
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        ID
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Name
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Email
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        Created_at
                                    </th>
                                    <th class="px-6 py-2 text-xs text-gray-500">
                                        status
                                    </th>
                                  
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            Jon doe
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">jhondoe@example.com</div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        2021-1-12
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                       Pending
                                    </td>
                                    <td class="px-6 py-4">
                                        <button to="/" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">approve  </button>
                                    </td>
                                    <td class="px-6 py-4">
                                        <button to="/" class="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete  </button>
                                    </td>
                                </tr>
                                <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            Jon doe
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">jhondoe@example.com</div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        2021-1-12
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                       pending
                                    </td>
                                    <td class="px-6 py-4">
                                        <button to="/" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">approve  </button>
                                    </td>
                                    <td class="px-6 py-4">
                                        <button to="/" class="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete  </button>
                                    </td>
                                </tr>
                                <tr class="whitespace-nowrap">
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        1
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-900">
                                            Jon doe
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="text-sm text-gray-500">jhondoe@example.com</div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        2021-1-12
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-500">
                                        confirmed
                                    </td>
                                    <td class="px-6 py-4">
                                        <button to="/" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">approve  </button>
                                    </td>
                                    <td class="px-6 py-4">
                                        <button to="/" class="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete  </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approve;